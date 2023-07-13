import MenuItems from "./MenuItems";

const Menu = ({ items }) => {
  return <div className="section-center">
    {items.map((menuItems) => {
        return <MenuItems key={menuItems.id} {...menuItems}/>
    })}
  </div>;
};
export default Menu;
