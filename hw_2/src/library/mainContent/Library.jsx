import Header from '../header/Header.jsx'
import Footer from '../footer/Footer.jsx'

import {useState} from "react";

const Library = () => {

    const [book, setBook] = useState([{
        'img': './book.jpg',
        'name': 'Имя',
        'year': 2001,
        'author': 'Автор',
        'count': 10
    }])
    return(
        <>
            <Header />
            <div className='add-book-container'>
                <AddBook book={book} setBook={setBook}/>
            </div>
            <div className='library-container'>
                {book.map((book, index) => {
                    return (
                        <DrawBook book={book} key={index} />
                    )
                })}
            </div>
            <Footer />
        </>
    )
}


const DrawBook = ({book}) => {
    return (
        <div className='book'>
            <p>
                <img className='book-img' src='/book.jpg'  alt='book_img'/>
            </p>
            <p>Название: {book.name}</p>
            <p>Год: {book.year}</p>
            <p>Автор: {book.author}</p>
            <p>Кол-во: {book.count}</p>
            <button className='book-button'>Читать</button>
        </div>
    )
}

const AddBook = ({book, setBook}) => {

    const [name, setName] = useState('')
    const [year, setYear] = useState(0)
    const [author, setAuthor] = useState('')
    const [count, setCount] = useState(0)
    const bookImg = './book.jpg'

    return(
        <div className='add-book'>
            <input type='text' onChange={(e) => setName(e.target.value)} placeholder='Название'/>
            <input type='number' onChange={(e) => setYear(e.target.value)} placeholder='Год'/>
            <input type='text' onChange={(e) => setAuthor(e.target.value)} placeholder='Автор'/>
            <input type='number' onChange={(e) => setCount(e.target.value)} placeholder='Кол-во'/>
            <button onClick={() => {
                if(name.length > 0 && author.length > 0) {
                    setBook([...book, {name, year, author, bookImg, count}]);
                }

            }} type='submit'>Добавить книгу</button>
        </div>

    )
}


export default Library