import { Dropdown } from '../../components/Dropdown'
import { Option } from '../../components/Dropdown/interfaces'
import { options } from './data'

const DropdownExample = () => {
  const handleOptionSelect = (options: Option[]) => {
    console.log(options)
  }
  return (
    <div style={{ margin: '30px' }}>
      <Dropdown options={options} onChangeValue={handleOptionSelect} />
    </div>
  )
}

export default DropdownExample
