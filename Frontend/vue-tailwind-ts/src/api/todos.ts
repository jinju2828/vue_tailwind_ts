import axios from 'axios';

const API_BASE = 'http://localhost:3000'; // NestJS 서버 주소

export interface Todo {
  id: number;
  text: string;
  done: boolean;
  order: number;
}

// 전체 Todo 가져오기
export const getTodos = async (): Promise<Todo[]> => {
  const res = await axios.get(`${API_BASE}/todos`);
  return res.data;
};

// 새 Todo 추가
export const addTodo = async (text: string): Promise<Todo> => {
  const res = await axios.post(`${API_BASE}/todos`, { text });
  return res.data;
};

// Todo 업데이트
export const updateTodo = async (id: number, data: Partial<Omit<Todo, 'id'>>): Promise<Todo> => {
  const res = await axios.put(`${API_BASE}/todos/${id}`, data);
  return res.data;
};

// Todo 삭제
export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${API_BASE}/todos/${id}`);
};
