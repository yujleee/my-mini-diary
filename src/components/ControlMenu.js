const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select className="control-menu" value={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

export default ControlMenu;
