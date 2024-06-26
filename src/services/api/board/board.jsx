import { api } from "../../api/api";

const detailBoard = async (id) => {
    try {
        const response = await api.get(`board/${id}`, id);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}

export default detailBoard;
