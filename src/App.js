import React,{ useState, useEffect, createContext, useContext} from 'react'
import './App.css'

const Context = createContext()

const Mago = () => {
  const { money } = useContext(Context)
  return <p>{money}円</p>
}

const Kodomo = () => <Mago />

const Oya = () => {
  // countはただの変数
  // setCountはcountに値を入れるためだけの関数
  // useState(0)の0はcountの初期値
  const [count, setCount] = useState(0)
  //useEffectは、第一引数にcallbackを入れて、第二引数に依存する値の配列を入れる
  // 依存する値が変更される度にcallbackが実行される
  useEffect(() => {
    document.title =`${count}回クリックされました`
  },[count])
  return (
    <>
      <div className='isOpen'>
        <p>現在の数字は{count}です</p>
        <button onClick={() => setCount(count + 1)}>+ 1</button>
        <button onClick={() => setCount(count - 1)}>- 1</button>
        <button onClick={() => setCount(10)}>1０</button>
        <button onClick={() => setCount(0)}>最初の数値に戻す</button>
      </div>

      <Context.Provider value={{ money: 10000 }}>
        <Kodomo />
      </Context.Provider>
    </>
  )
}



/*
class Oya extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0,
    }
  }

  render() {
    return (
      <>
        <div className='isOpen'>
          <p>現在の数字は {this.state.count} です</p>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            + 1
          </button>
          <button
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            - 1
          </button>
          <button onClick={() => this.setState({ count: 0 })}>0</button>
          <button onClick={() => this.setState({ count: 0 })}>
            最初の数値に戻す
          </button>
        </div>
      </>
    )
  }
}
*/
export default Oya
