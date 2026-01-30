'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Field } from '@/components/ui/field';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { type DateRange } from 'react-day-picker';

interface DatePickerWithRangeProps {
  value?: DateRange;
  onChange?: (value?: DateRange) => void;
  label?: string;
  id?: string;
  className?: string;
}

export function DatePickerWithRange({
  value,
  onChange,
  id = 'date-picker-range',
  className,
}: DatePickerWithRangeProps) {
  const [internalDate, setInternalDate] = React.useState<DateRange | undefined>(value);

  React.useEffect(() => {
    if (value !== undefined) {
      setInternalDate(value);
    }
  }, [value]);

  const date = value ?? internalDate;
  const handleSelect = (next?: DateRange) => {
    if (onChange) onChange(next);
    else setInternalDate(next);
  };

  return (
    <Field className={className ?? 'w-60'}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant='outline' id={id} className='justify-start px-2.5 font-normal'>
            <CalendarIcon />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                </>
              ) : (
                format(date.from, 'LLL dd, y')
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-auto p-0' align='start'>
          <Calendar
            mode='range'
            defaultMonth={date?.from}
            selected={date}
            onSelect={handleSelect}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </Field>
  );
}
