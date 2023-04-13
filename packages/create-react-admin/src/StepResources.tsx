import * as React from 'react';
import { useState } from 'react';
import TextInput from 'ink-text-input';
import { Text } from 'ink';
import { Stack } from './Stack.js';

export const StepResources = ({
    onSubmit,
}: {
    onSubmit: (value: string[]) => void;
}) => {
    const [value, setValue] = useState('');
    const [resources, setResources] = useState<string[]>([]);

    const handleSubmit = (value: string) => {
        if (value === '') {
            onSubmit(resources);
        } else {
            setResources([...resources, value]);
            setValue('');
        }
    };
    return (
        <Stack>
            <Text>
                Enter the name of a resource you want to add and validate with
                Enter (leave empty to finish):
            </Text>
            <Text color="blue">
                {resources.length > 0
                    ? `Resources: ${resources.join(', ')}`
                    : 'No resource yet'}
            </Text>
            <TextInput
                value={value}
                onChange={v => setValue(v)}
                onSubmit={handleSubmit}
            />
        </Stack>
    );
};
