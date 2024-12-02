'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f3f4f6'
    }}>
      <div style={{
        maxWidth: '28rem',
        width: '100%',
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        textAlign: 'center'
      }}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#9C52E5" style={{
          width: '3rem',
          height: '3rem',
          margin: '0 auto 1rem'
        }}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
        <h1 style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#1f2937',
          marginBottom: '1rem'
        }}>Oops! Something went wrong</h1>
        <p style={{
          color: '#6b7280',
          marginBottom: '1rem'
        }}>We apologize for the inconvenience. An error has occurred.</p>
        <div style={{
          backgroundColor: '#E1A7E2',
          color: '#1f2937',
          padding: '1rem',
          borderRadius: '0.375rem',
          marginBottom: '1.5rem',
          overflow: 'auto',
          maxHeight: '10rem'
        }}>
          <pre style={{ fontSize: '0.875rem' }}>{error.message}</pre>
        </div>
        <button 
          onClick={reset}
          style={{
            backgroundColor: '#9C52E5',
            color: 'white',
            fontWeight: 'bold',
            padding: '0.5rem 1rem',
            borderRadius: '0.25rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8A3ED1'}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#9C52E5'}
        >
          Try again
        </button>
      </div>
    </div>
  )
}

