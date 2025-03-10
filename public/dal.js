const API_URL = "http://localhost:3000/api/v1";

async function getUsers (){
    try {
        const res = await fetch(`${API_URL}/users`);
        if (!res.ok) {
            throw new Error("Not ok!");
        }

        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

module.exports = { getUsers };