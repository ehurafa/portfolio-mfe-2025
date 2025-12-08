// Simple test component to verify Module Federation works
export default function TestComponent() {
  return (
    <div style={{ 
      padding: '40px', 
      textAlign: 'center', 
      color: 'white',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '8px'
    }}>
      <h1>🎉 Module Federation Funcionando!</h1>
      <p>Se você está vendo isso, o remote está carregando corretamente!</p>
    </div>
  );
}
