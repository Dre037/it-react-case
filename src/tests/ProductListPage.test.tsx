import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ProductListPage } from '../ProductListPage/ProductListPage'
import { useProducts } from '../hooks/ProductState'
import { act } from 'react'

jest.mock('../hooks/ProductState')

const mockProducts = [
  {
    id: 1,
    name: 'Cartão Reativo',
    type: 'Cartão de Crédito',
    description: 'Teste',
    interestRate: 2,
    createdAt: '2026-01-01',
    active: true,
    limit: 1000,
    spent: 200
  },
  {
    id: 2,
    name: 'Cartão Angularizado',
    type: 'Cartão de Crédito',
    description: 'Teste',
    interestRate: 1,
    createdAt: '2026-01-01',
    active: false,
    limit: 2000,
    spent: 500
  }
]

describe('ProductListPage', () => {
  beforeEach(() => {
    (useProducts as jest.Mock).mockReturnValue({
      products: mockProducts,
      loading: false,
      error: null,
      reload: jest.fn(),
      toggleStatus: jest.fn(),
    })

    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  it('renders products on screen', () => {
    render(<ProductListPage />)

    expect(screen.getByText('Seus Produtos Financeiros')).toBeInTheDocument()
    expect(screen.getByText('Cartão Reativo')).toBeInTheDocument()
    expect(screen.getByText('Cartão Angularizado')).toBeInTheDocument()
  })

  it('filters products when searching', async () => {
    render(<ProductListPage />)

    const input = screen.getByPlaceholderText(/buscar produto/i)
    fireEvent.change(input, { target: { value: 'reativo' } })

    await act(async () => {
      jest.runAllTimers()
    })

    await waitFor(() => {
      expect(screen.getByText('Cartão Reativo')).toBeInTheDocument()
    })
    
    expect(screen.queryByText('Cartão Angularizado')).not.toBeInTheDocument()
  })
})
