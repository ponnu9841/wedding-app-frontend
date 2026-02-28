import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Data = {
	label: string;
	value: string;
};

interface SelectFieldProps extends React.ComponentProps<typeof Select> {
	data: Data[];
	placeholder?: string;
	error?: boolean;
	triggerClassName?: string;
	icon?: React.ReactNode;
}

const SelectField: React.FC<SelectFieldProps> = ({
	data,
	placeholder,
	error,
	triggerClassName,
	icon,
	...props
}) => {
	return (
		<Select {...props}>
			<SelectTrigger
				className={cn(
					"w-full bg-background/80 border",
					error ? "border-destructive focus:ring-destructive" : "border-input",
					triggerClassName,
				)}
			>
				<div className="flex items-center gap-2">
					{!!icon && icon}
					<SelectValue placeholder={placeholder} />
				</div>
			</SelectTrigger>
			<SelectContent className="z-180">
				{data.map((item) => (
					<SelectItem key={item.value} value={item.value}>
						{item.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default SelectField;
