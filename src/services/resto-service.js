export default class RestoService {
    url = 'http://localhost:3000/menu';
    getMenuItems = async () => {
        const response = await fetch(this.url);
        if (!response.ok) {
            throw new Error('Server Error. Maybe you havent started json.server. Install it and type "json-server src/db.json" in console')
        }
        const result = await response.json();
        return result;
    }
}