import Footer from './component/Footer'
import Header from './component/Header'
import Cardcontainer from './component/Cardcontainer'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <div className='option-bar'>
      <h1>المعسكرات والبرامج</h1>
      <div>
      <button>الكبار</button>
      <button>الناشؤن</button>
      </div>
      <button>
        
      </button>


      </div>
      <Cardcontainer>

      </Cardcontainer>

      <div className='join-steps-section'>
        <h1>خطوات التسجيل</h1>
        <div className='join-steps-sub-div'>
          <div>
            <img></img>
            <p>الانظمام الى المنصة</p>
          </div>
          <div>
            ----------------
          </div>

          <div>
            <img></img>
            <p>التسجيل في المعسكر او البرنامج</p>
          </div>
          <div>
            ----------------
          </div>

          <div>
            <img></img>
            <p>إنتظار رسالة القبول</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default App
