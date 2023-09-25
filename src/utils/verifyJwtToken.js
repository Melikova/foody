import { jwtVerify } from 'jose'

const getJwtSecretKey = () => {
    const secretKey = process.env.JWT_SECRET_KEY;

    if (!secretKey) {
        throw new Error("JWTSecret key is not available")
    }

    return new TextEncoder().encode(secretKey)
}

export const verifyJwtToken = async (token) => {
    try {
        const { payload } = await jwtVerify(token, getJwtSecretKey())
        return payload
    } catch (error) {
        return null
    }
}