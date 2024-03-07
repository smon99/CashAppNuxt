export async function fetchData() {
    const route = useRoute()
    const id = route.params.id
    try {
        const response = await fetch(`http://localhost:8000/home/browse/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}