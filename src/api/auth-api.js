import api from "./api";

export const userAPI = {
    async signUp(email, password) {
        const res = await api.post("signup", {email, password});
        return res.data;
        console.log(res.data);
    },

    async signIn(email, password) {
        const res = await api.post("signin", {email, password});
        return res.data;
        console.log(res.data);
    },

    async signOut() {
        return await api.post("signout");
    },

}
