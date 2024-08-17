import React, { useId } from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency ="inr",
  amountDisable = false,
  currencyDisable = false,

  className = "border-black ",
}) {
 const amountInputId = useId()

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
          <div className="w-1/2 bg-slate-300">
              <label htmlFor={amountInputId}
               className="text-black/60  mb-3 inline-block">
                 {label} 
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5 text-center"
                  type="number"
                  placeholder="Amount"
                  disabled={amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

              />
          </div>
          <div className="w-1/2 pr-4 flex bg-gray-200 flex-wrap justify-end text-right">
              <p className="text-black/60 mb-1 w-full">Currency Type</p>
              <select
                  className="rounded-md px-2 py-1 bg-white cursor-pointer outline-none"
                  value={selectCurrency}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                  disabled={currencyDisable}
                  
              >
                  
                 {currencyOptions.map((currency) => (
                  <option key={currency} value={currency}>
                          {currency}
                      </option>
                 ))}
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;