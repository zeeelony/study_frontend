import { useState } from "react";

function FormPage() {
    const [names, setNames] = useState([]);
    const [inputName, setInputName] = useState("");

    const addName = () => {
        if (inputName.trim()) {
            setNames([...names, inputName.trim()]);
            setInputName(""); // Очистить поле ввода
        }
    };

    const changeName = (index) => {
        if (inputName.trim()) {
            const updatedNames = [...names];
            updatedNames[index] = inputName.trim();
            setNames(updatedNames);
            setInputName(""); // Очистить поле ввода
        }
    };
    return (
        <div>

            <div>
                <input
                    type="text"
                    placeholder="Enter name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                />
                <button onClick={addName} disabled={!inputName.trim()}>
                    Добавить
                </button>
            </div>

            <div style={{ marginTop: "20px" }}>
                {names.length === 0 ? (
                    <p>Список пуст</p>
                ) : (
                    <ul>
                        {names.map((name, index) => (
                            <li key={index}>
                                {name}{" "}
                                <button
                                    onClick={() => changeName(index)}
                                    disabled={!inputName.trim()}
                                >
                                    Поменять
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

export default FormPage;
