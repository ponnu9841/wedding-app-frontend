const AdminSectionLayout = ({
	leftSection,
	rightSection,
}: {
	leftSection?: React.ReactNode;
	rightSection?: React.ReactNode;
}) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-5 gap-8">
			<div className="md:col-span-2">{leftSection}</div>
			<div className="md:col-span-3">{rightSection}</div>
		</div>
	);
};

export default AdminSectionLayout;
