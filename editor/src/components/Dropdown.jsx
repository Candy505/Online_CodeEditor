import "./Dropdown.css";

export const Dropdown = ({ defaultLanguage ,defaultTheme, onChange, data }) => {
    const defaultValue = defaultTheme ? defaultTheme : defaultLanguage;
  return (
    <div> 
    <select className="select" defaultValue={defaultValue} onChange={onChange}>
      {Object.keys(data)
        .sort()
        .map((item, index) => {
          return (
            <option key={index} value={item}>
              {item}
            </option>
          );
        })}
    </select>
</div>
  );
};

export default Dropdown