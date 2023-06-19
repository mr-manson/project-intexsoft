import api from "./api";

export const userAPI = {
    async signUp(email, password) {
        const res = await api.post("signup", {email, password});
        console.log(res.data);
        return res.data;
    },

    async signIn(email, password) {
        const res = await api.post("signin", {email, password});
        console.log(res);
        return res.data;
    },

    async signOut() {
        return await api.post("signout");
    },

}
