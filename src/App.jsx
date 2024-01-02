import { useState , useEffect } from "react";
import "./App.css";

// Component
import Header from "./Components/Header";
import AddForm from "./Components/AddForm";
import Item from "./Components/Item";


function App() {
    const[tasks,setTasks]=useState(JSON.parse(localStorage.getItem("TodoList")) || [])
    const [title,setTitle] = useState("")
    const [editId,setEditId] = useState("")
    const [theme,setTheme] = useState("Light")

    useEffect(()=>{
        localStorage.setItem("TodoList",JSON.stringify(tasks))
    },[tasks])

    // บันทึกข้อมูล
    function saveTask(e){
        e.preventDefault()
        if(!title){
            alert("กรุณาเพิ่มข้อมูล")
        }else if(editId){
            // อัพเดทข้อมูล
            const updateTask = tasks.map((item)=>{
                // รายการใดมีรหัสตรงกันให้เปลี่ยนแปลง
                if(item.id === editId){
                    return{...item,title:title}
                }
                return item;
            })
            setTasks(updateTask)
            setTitle("")
            setEditId(null)
        }else{
            // เพิ่มรายการใหม่
            const newTask={
                id: Math.floor(Math.random()*1000),
                title:title
            }
            setTasks([...tasks,newTask])
            setTitle("")
        }
    }
    // ลบข้อมูล
    function deleteTask(id){
        setTasks(tasks.filter((item)=>item.id !==id));
    }
    // แก้ไขข้อมูล
    function editTask(id){
        setEditId(id)
        const editTask = tasks.find((item)=>item.id === id)
        setTitle(editTask.title)
    }
  return (
    <div className={"App "+theme}>
      <Header theme={theme} setTheme={setTheme} />
      <div className="container">
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId} />
        <section>
            {
                tasks.map((data)=>(
                    <Item key={data.id} data={data} deleteTask={deleteTask}  editTask={editTask}/>
                ))
            }
        </section>
      </div>
    </div>
  );
}
export default App;
