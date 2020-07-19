export const config = {
    serverHost: "https://coronacrud.azurewebsites.net/api/request",
    getPersonDataUrl: (id) => `${config.serverHost}/${id}`,
}