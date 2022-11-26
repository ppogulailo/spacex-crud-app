import {useState, useEffect} from 'react';
import {Search} from "./Search";
import {CustomSelect} from "./CustomSelect";
import styled from "styled-components";
const options =[
    {value:'A',label:'A'},
    {value:'B',label:'B'},
    {value:'C',label:'C'},
    {value:'D',label:'D'},
]
const Wrapper= styled.div`
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      
      @media(min-width: 767px){
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `
const Controls = ({onSearch}:any) => {
    const [search, setSearch] = useState<string>('')
    const [value, setValue] = useState<any>('');
    useEffect(() => {
        onSearch(search)
    }, [search]);

    return (
        <Wrapper>
            <Search  setSearch={setSearch} search={search}/>
            <CustomSelect
                options={options}
                isClearable
                value={value}
                onChange={setValue}
                isSearchable={false}
                placeholder='Select Item'
            />
        </Wrapper>
    );
};

export default Controls;
