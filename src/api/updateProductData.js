import baseUrl from 'api/baseUrl'

const updateUser = async (updateProduct) => {
    console.log(updateProduct);
    const { id } = updateProduct
    return await fetch(`${baseUrl}/api/restuarants/${id}`, {
        method: 'PUT',
        body: JSON.stringify(updateProduct)
    });
}

export default updateUser