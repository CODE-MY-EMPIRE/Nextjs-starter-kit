import React from 'react'

type BtnProps = {
  text: string
  onClick: () => void
}

const Button = ({ text, onClick }: BtnProps) => {
	return <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClick}>{text}</button>;
};

export default Button