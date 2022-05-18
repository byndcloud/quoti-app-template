export default class ProductMarketplaceApi {
  constructor(quotiApi) {
    this.quotiApiAxios = quotiApi.axios;
    this.pendingAxiosRequests = [];
    this._list = null;
    this._listPromise = null;
  }
  async list() {
    let baseURL = `${process.env.VUE_APP_API_BASE_URL}`;
    const productsMarketplace = await this.quotiApiAxios.get(
      `${baseURL}marketplace/product`
    );
    return productsMarketplace.data;
  }

  async listExtensionVersions({ extensionId }) {
    const { data } = await this.quotiApiAxios.get(
      `/marketplace/extensions/${extensionId}/versions`
    );
    return data.data;
  }
  async listOne(id) {
    let baseURL = `${process.env.VUE_APP_API_BASE_URL}`;
    const productsMarketplace = await this.quotiApiAxios.get(
      `${baseURL}marketplace/product/${id}`
    );
    return productsMarketplace.data;
  }
  async getExtension({ productId }) {
    const productsMarketplace = await this.quotiApiAxios.get(
      `marketplace/extensions?productId=${productId}`
    );
    return productsMarketplace.data;
  }

  async requestToInstall({ params, data }) {
    const productsMarketplace = await this.quotiApiAxios.post(
      `marketplace/extensions/${params.extensionId}/requestToInstall`,
      data
    );
    return productsMarketplace.data;
  }

  async requestToUninstall({ params, data }) {
    const productsMarketplace = await this.quotiApiAxios.post(
      `marketplace/extensions/${params.extensionId}/requestToUninstall`,
      data
    );
    return productsMarketplace.data;
  }

  async requestToUpdate({ params, body }) {
    const productsMarketplace = await this.quotiApiAxios.post(
      `marketplace/extensions/${params.extensionId}/requestToUpdate`,
      body
    );
    return productsMarketplace.data;
  }

  async getInstallation({ productId }) {
    const { data } = await this.quotiApiAxios.get(
      `marketplace/extensions/installations?productId=${productId}`
    );
    return data.data;
  }
  async listAllInstallations() {
    const { data } = await this.quotiApiAxios.get(
      `marketplace/extensions/installations`
    );
    return data.data;
  }
}
