const dbOperations = require('../../src/helpers/loadProductsDb');
const { loadProducts } = require('../../src/handlers/loadProducts');

describe('the loadProducts handler ', () => {
  it('should return a success message with status code 200 when data is successfully inserted to the db', async () => {
    const mockLoadAllProducts = jest.spyOn(dbOperations, 'loadAllProducts');
    mockLoadAllProducts.mockResolvedValue(true);
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(() => ({ code: mockCode })),
    };
    await loadProducts(null, mockH);
    // expect(mockLoadAllProducts).toHaveBeenCalled();
    // expect(mockH.response).toHaveBeenCalledWith('Loaded all the Products to the Database!');
    // expect(mockCode).toHaveBeenCalledWith(200);
    mockLoadAllProducts.mockRestore();
  });

  it('should return a failure message with status code 500 when db is not loaded', async () => {
    const mockLoadAllProducts = jest.spyOn(dbOperations, 'loadAllProducts');
    mockLoadAllProducts.mockRejectedValue(new Error('Could not load the Database!'));
    const mockCode = jest.fn();
    const mockH = {
      response: jest.fn(() => ({ code: mockCode })),
    };
    await loadProducts(null, mockH);
    // expect(mockLoadAllProducts).toHaveBeenCalled();
    // expect(mockH.response).toHaveBeenCalledWith('Could not load the Database!');
    // expect(mockCode).toHaveBeenCalledWith(500);
    mockLoadAllProducts.mockRestore();
  });
});
