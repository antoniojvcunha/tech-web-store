async function fetchAllProductsService() {
  try {
    const response = await fetch("http://localhost:3000/api/products");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("Dados recebidos:", data);
    return data;
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
}

async function fetchProductsByCategoryService(categoryName) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/products/category/${categoryName}`
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar produtos por categoria");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no fetchProductsByCategoryService:", error);
    throw error;
  }
}

async function fetchProductsByIdService(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/products/${id}`);
    if (!response.ok) {
      throw new Error("Erro ao buscar produto por ID");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erro no fetchProductByIdService:", error);
    throw error;
  }
}

export default {
  fetchAllProductsService,
  fetchProductsByCategoryService,
  fetchProductsByIdService,
};
