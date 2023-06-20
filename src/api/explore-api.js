import api from "./api";

export const exploreAPI = {
    async getStyles () {
        const res = await api.get("styles");
        return res;
    },
}
