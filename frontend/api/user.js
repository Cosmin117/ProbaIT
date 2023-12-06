const getLoggedInUser = async () => {
    try {
        const res = await fetch("http:localhost:5001/getLoggedInUser", {
            method: "GET",
        })

        return await res.json();
    } catch (error) {
        throw new Error("Please login to continue");
    }
}