import { createElement as e, useState } from 'react';

function App() {
    //   return (
    //     <h1>Hello My Really Lovely React!!!</h1>
    //     );
    // return React.createElement('h1', {}, 'Hello From Js') # так работает компилирование из JS

    const [count, setCount] = useState(0)

    //! Синтаксис JSX
    return e('div', { className: 'container' }, [
        e('h1', { className: 'font-bold', key: 1 }, `Test JSX ${count}`),
        e('button', {
            className: 'py-2 px-4 border',
            key: 2,
            // onClick: () => console.log('Clicked!')
            onClick: () => setCount(count + 1)
        }, 'Click me!')
    ])
}