type EventCallback = (data: unknown) => void

class EventBus {
  private events: Map<string, EventCallback[]> = new Map()

  subscribe(event: string, callback: EventCallback): () => void {
    if (!this.events.has(event)) {
      this.events.set(event, [])
    }
    this.events.get(event)?.push(callback)

    // Return unsubscribe function
    return () => this.unsubscribe(event, callback)
  }

  publish(event: string, data?: unknown): void {
    const callbacks = this.events.get(event) || []
    for (const callback of callbacks) {
      try {
        callback(data)
      } catch (error) {
        console.error(`Error in event callback for "${event}":`, error)
      }
    }
  }

  unsubscribe(event: string, callback: EventCallback): void {
    const callbacks = this.events.get(event)
    if (callbacks) {
      this.events.set(
        event,
        callbacks.filter(cb => cb !== callback)
      )
    }
  }

  clear(event?: string): void {
    if (event) {
      this.events.delete(event)
    } else {
      this.events.clear()
    }
  }
}

// Export singleton instance
export const eventBus = new EventBus()

// Make it globally accessible for MFEs
if (typeof window !== 'undefined') {
  window.__eventBus__ = eventBus
}

// Event types for type safety
export enum MFEEvents {
  NAVIGATE = 'mfe:navigate',
  THEME_CHANGE = 'mfe:theme-change',
  USER_ACTION = 'mfe:user-action',
  ERROR = 'mfe:error'
}
