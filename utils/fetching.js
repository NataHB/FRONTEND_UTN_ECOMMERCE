const getAuthenticatedHeaders = () => {
    const accessToken = sessionStorage.getItem("accessToken")
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`
    }
}

export {getAuthenticatedHeaders}