import baseUrl from 'api/baseUrl'

const postUserData = async (userData) => {
    const res = await fetch(`${baseUrl}/api/auth/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application / json'
        },
        body: JSON.stringify(userData)
    });

    const data = await res.json()
    return data
}

export default postUserData