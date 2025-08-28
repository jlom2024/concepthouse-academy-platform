'use client';

import { useState } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [backendStatus, setBackendStatus] = useState<string>('');

  const handleTestBackend = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/api/test');
      const data = await response.json();
      setBackendStatus(data.message);
    } catch (error) {
      setBackendStatus('Error conectando con el backend');
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestHealth = async () => {
    try {
      const response = await fetch('http://localhost:3001/health');
      const data = await response.json();
      setBackendStatus(`Health: ${data.status} - ${data.service}`);
    } catch (error) {
      setBackendStatus('Error en health check');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      {/* Hero Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px'
      }}>
        <div>
          {/* Logo */}
          <div style={{
            width: '128px',
            height: '128px',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            borderRadius: '50%',
            margin: '0 auto 32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '48px',
            fontWeight: 'bold',
            color: 'black'
          }}>
            CH
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: '4rem',
            fontWeight: 'bold',
            margin: '0 0 24px 0',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            ConceptHouse Academy
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '1.5rem',
            color: '#cccccc',
            margin: '0 0 32px 0',
            maxWidth: '600px'
          }}>
            La primera academia creada por la Content House que genera miles de millones de vistas
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <button
              onClick={handleTestBackend}
              disabled={isLoading}
              style={{
                background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                color: 'black',
                border: 'none',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: isLoading ? 'not-allowed' : 'pointer',
                opacity: isLoading ? 0.5 : 1,
                transition: 'transform 0.2s'
              }}
              onMouseOver={(e) => {
                if (!isLoading) e.target.style.transform = 'scale(1.05)';
              }}
              onMouseOut={(e) => {
                e.target.style.transform = 'scale(1)';
              }}
            >
              {isLoading ? 'Probando...' : 'Probar Backend'}
            </button>
            
            <button
              onClick={handleTestHealth}
              style={{
                background: 'transparent',
                border: '2px solid #FFD700',
                color: '#FFD700',
                padding: '16px 32px',
                borderRadius: '50px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.background = '#FFD700';
                e.target.style.color = 'black';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#FFD700';
              }}
            >
              Health Check
            </button>
          </div>

          {/* Backend Status */}
          {backendStatus && (
            <div style={{
              background: '#333333',
              border: '1px solid #555555',
              borderRadius: '8px',
              padding: '16px',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <p style={{ color: '#00ff00', fontWeight: 'bold', margin: 0 }}>
                {backendStatus}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Courses Section */}
      <div style={{
        padding: '80px 20px',
        background: 'rgba(0,0,0,0.5)'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          textAlign: 'center',
          margin: '0 0 64px 0',
          background: 'linear-gradient(45deg, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Tu Formación Apenas Comienza
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {[
            { title: 'Storytelling', desc: 'Estructura y narrativa profesional', color: 'linear-gradient(45deg, #3B82F6, #8B5CF6)' },
            { title: 'Iluminación', desc: 'Domina luz natural y artificial', color: 'linear-gradient(45deg, #10B981, #3B82F6)' },
            { title: 'Postproducción', desc: 'Rápido, potente y con estilo', color: 'linear-gradient(45deg, #8B5CF6, #EC4899)' },
            { title: 'IA Aplicada', desc: 'IA para multiplicar creatividad', color: 'linear-gradient(45deg, #F97316, #EF4444)' },
            { title: 'Branding', desc: 'Construye una marca que conecta', color: 'linear-gradient(45deg, #EAB308, #10B981)' },
            { title: 'Contenido Viral', desc: 'Algoritmos, tendencias y series', color: 'linear-gradient(45deg, #EC4899, #8B5CF6)' }
          ].map((course, index) => (
            <div key={index} style={{
              background: '#333333',
              border: '1px solid #555555',
              borderRadius: '16px',
              padding: '24px',
              cursor: 'pointer',
              transition: 'transform 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.target.style.transform = 'scale(1)';
            }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '8px',
                background: course.color,
                marginBottom: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'white'
              }}>
                {index + 1}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 0 8px 0',
                color: 'white'
              }}>
                {course.title}
              </h3>
              <p style={{ color: '#cccccc', margin: 0 }}>
                {course.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        padding: '80px 20px',
        background: 'linear-gradient(45deg, rgba(255,215,0,0.1), rgba(255,165,0,0.1))',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          margin: '0 0 32px 0',
          color: 'white'
        }}>
          La Pre-Venta ya está Abierta
        </h2>
        <p style={{
          fontSize: '1.5rem',
          color: '#cccccc',
          margin: '0 0 32px 0',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Forma parte de la primera generación de creadores formados bajo el método ConceptHouse
        </p>
        <div style={{
          fontSize: '4rem',
          fontWeight: 'bold',
          margin: '0 0 32px 0',
          background: 'linear-gradient(45deg, #FFD700, #FFA500)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          $199.00 USD
        </div>
        <button style={{
          background: 'linear-gradient(45deg, #FFD700, #FFA500)',
          color: 'black',
          border: 'none',
          padding: '24px 48px',
          borderRadius: '50px',
          fontSize: '1.5rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
        }}
        >
          SÍ, QUIERO SER UN CREADOR PROFESIONAL
        </button>
      </div>
    </div>
  );
}
