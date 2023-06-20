import api from "./api";

export const exploreAPI = {
    async getStyles () {
        return await api.get("styles");
    },
}
