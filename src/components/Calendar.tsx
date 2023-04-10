import React from 'react'
import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  margin: 0;
  padding: 8px 24px;
  
  font-weight: normal;
  text-align: center;
  
`;
const ArrowButton = styled.button<{ pos: 'left' | 'right' }>`
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  background-color: transparent;
  
  cursor: pointer;
  
`;
const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  border-spacing: 0;
`;

const TableHeader = styled.thead`
  padding-block: 12px;
  > tr {
    > th {
      padding-block: 12px;
      font-weight: normal;
      
    }
  }
`;


const TableBody = styled.tbody`
  > tr {
    > td {
      width: 128px;
      height: 128px;
      box-sizing: border-box;
    }
  }
`;

const TableData = styled.td`
  text-align: center;
  color: #C9C8CC;
  padding: 8px;
  position: relative;
`;

const DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const MONTHS = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
function Calendar() {
    return (
        <div>
            <Header>
                <ArrowButton pos='left'><BiChevronLeft /></ArrowButton>
                <Title>년 월</Title>
                <ArrowButton pos='right'><BiChevronRight /></ArrowButton>
            </Header>

            <Table>
                <TableHeader>
                    <tr>
                        {
                            DAYS.map((day, index) => (
                                <th key={day} align="center">{day}</th>
                            ))
                        }
                    </tr>
                </TableHeader>

                <TableBody>

                </TableBody>
            </Table>
        </div>
    )
}

export default Calendar
