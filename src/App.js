import  React, {Component} from 'react';
import logo from './logo.svg';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import { Stack, IStackTokens } from '@fluentui/react';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';

import './App.css';


/**export interface IButtonExampleProps {
  // These are set based on the toggles shown above the examples (not needed in real code)
  disabled?: boolean;
  checked?: boolean;
}
// Example formatting
const stackTokens: IStackTokens = { childrenGap: 40 };

export const ButtonDefaultExample: React.FunctionComponent<IButtonExampleProps> = props => {
  const { disabled, checked } = props;

  return (
    <Stack horizontal tokens={stackTokens}>
      <DefaultButton text="Standard" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
      <PrimaryButton text="Primary" onClick={_alertClicked} allowDisabledFocus disabled={disabled} checked={checked} />
    </Stack>
  );
};

function _alertClicked(): void {
  alert('Clicked');
}**/

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({ monsters: users  }));
}

handleChange(e) {
  this.setState({searchField: e.target.value })
}

render() {

  const { monsters, searchField } =this.state;
  const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

  return (
    <div className="App">
    
      <SearchBox 
        placeholder='search monsters' 
        handleChange={ this.handleChange } />

      <CardList monsters={filteredMonsters}></CardList>
      <PrimaryButton text="Primary" onClick={'Clicked'} allowDisabledFocus disabled={false} checked={true} />
    </div>
  );

};
  


}


export default App;
