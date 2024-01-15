'use client'
import { getRecipesList } from "./data/recipe";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
export default function Home() {
  const [list, setList] = useState([]);
  useEffect(() => {
  setList(getRecipesList());
  }, []);
  const handleDelete = () => {
    setList([...getRecipesList()]);
  };
  const handleUpdate = () => {
    setList([...getRecipesList()]);
  };
  const handleAdd = () => {
    setList([...getRecipesList()]);
  };
  return (
    <main className="max-w-[100rem] mx-auto">
      <Navbar onAdd={handleAdd} />
      <div className=" pt-[96px] pb-[16px] text-5xl border-b">
        Recipe List
      </div>
      <div className="my-[40px] grid grid-cols-2 gap-5">
        {list.map((item, index) => {
          return <Card title={item.name} price={item.price} description={item.description} ingredients={item.selectedIngredients} image={item.image}  onDelete={handleDelete} onUpdate = {handleUpdate} />;
        })}
      </div>
    </main>
  );
}
