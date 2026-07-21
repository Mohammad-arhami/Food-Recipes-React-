import { useThem } from "../hooks/useThem";
import "./ThemeSelector.css";

const themeColors = ['#4e208a' , '#249c6b' , '#b70233'];

export default function ThemeSelector() {

    const {changeColor} = useThem()

  return (
    <div className="theme-selector">
      <div className="theme-buttons">
        {themeColors.map(color => (
            <div 
                key={color}
                onClick={() => changeColor(color)}
                style={{background : color}}
            />
        ))}
      </div>
    </div>
  )
}
