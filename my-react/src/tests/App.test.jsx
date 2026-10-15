import { render, screen, fireEvent } from "@testing-library/react"; 
import App from "../App";

describe("App component", () => {
    test("добавляет новую задачу и отображает ее в списке", () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/введите задачу/i);
        const button = screen.getByText(/добавить/i);
        
        fireEvent.change(input, { target: { value: "Проверить тест" } });
        fireEvent.click(button);

        expect(screen.getByText("Проверить тест")).toBeInTheDocument();
        expect(screen.getByText(/Задачи: 1/i)).toBeInTheDocument();
    });
    test('удаляет задачу при клике', () => {
        render(<App />);
        const input = screen.getByPlaceholderText(/Введите задачу.../i);
        const button = screen.getByText(/добавить/i);
        
        fireEvent.change(input, { target: { value: "Удалить задачу" } });
        fireEvent.click(button);

        const deleteButton = screen.getByRole("button",{name: /удалить/i});
        fireEvent.click(deleteButton);
        expect(screen.queryByText("удалить задачу")).not.toBeInTheDocument();
    });
});