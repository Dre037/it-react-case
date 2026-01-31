import { render, screen, fireEvent } from '@testing-library/react'
import { ProductDetails } from '../ProductListPage/ProductDetails/ProductDetails'

const mockProduct = {
  id: 1,
  name: 'Cartão Reativo',
  type: 'Cartão de Crédito',
  description: 'Descrição teste',
  interestRate: 2.5,
  createdAt: '2026-01-01',
  active: true,
  limit: 10000,
  spent: 3000
}

describe('ProductDetails', () => {
  it('renders product details', () => {
    render(
      <ProductDetails
        product={mockProduct}
        onClose={jest.fn()}
        onToggleStatus={jest.fn()}
      />
    )

    expect(screen.getByText('Cartão Reativo')).toBeInTheDocument()
    expect(screen.getByText('Descrição teste')).toBeInTheDocument()
    expect(screen.getByText('R$ 10.000,00')).toBeInTheDocument()
  })

  it('calls toggleStatus when switch is clicked', () => {
    const toggleMock = jest.fn()

    render(
      <ProductDetails
        product={mockProduct}
        onClose={jest.fn()}
        onToggleStatus={toggleMock}
      />
    )

    const switchBtn = screen.getByText('ON') // mock do Switch
    fireEvent.click(switchBtn)

    expect(toggleMock).toHaveBeenCalledWith(1)
  })
})
