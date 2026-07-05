import React, { useEffect, useState, useRef } from "react";
import {
	Search,
	Mail,
	Phone,
	Globe,
	MapPin,
	Sparkles,
	Users,
	X,
	Plus,
	User,
	Building2,
	AtSign,
	Link,
	Trash2,
} from "lucide-react";

const GRADIENTS = [
	"from-fuchsia-500 to-purple-600",
	"from-orange-400 to-pink-500",
	"from-lime-400 to-emerald-500",
	"from-cyan-400 to-blue-500",
	"from-yellow-400 to-orange-500",
	"from-purple-500 to-indigo-600",
	"from-pink-400 to-rose-500",
	"from-teal-400 to-cyan-500",
];

const TILTS = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

function getInitials(name) {
	return name
		.split(" ")
		.map(w => w[0])
		.slice(0, 2)
		.join("")
		.toUpperCase();
}

function Field({
	icon: Icon,
	label,
	name,
	value,
	onChange,
	type = "text",
	placeholder,
	accentClass = "text-fuchsia-400",
}) {
	return (
		<div className='flex flex-col gap-1'>
			<label className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
				{label}
			</label>
			<div className='relative'>
				<Icon
					className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${accentClass} pointer-events-none`}
				/>
				<input
					type={type}
					name={name}
					value={value}
					onChange={onChange}
					placeholder={placeholder}
					className='w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-fuchsia-400/50 focus:bg-white/8 transition-all'
				/>
			</div>
		</div>
	);
}

// ── Add Employee Modal ───────────────────────────────────────────────────────
function AddEmployeeModal({ onClose, onAdd }) {
	const overlayRef = useRef(null);
	const [form, setForm] = useState({
		name: "",
		username: "",
		email: "",
		phone: "",
		city: "",
		website: "",
		company: "",
	});
	const [error, setError] = useState("");

	// close on overlay click
	const handleOverlay = e => {
		if (e.target === overlayRef.current) onClose();
	};

	// close on Escape
	useEffect(() => {
		const handler = e => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handler);
		return () => window.removeEventListener("keydown", handler);
	}, [onClose]);

	const handleChange = e => {
		setForm(f => ({ ...f, [e.target.name]: e.target.value }));
		setError("");
	};

	const handleSubmit = () => {
		if (!form.name.trim()) {
			setError("Name is required.");
			return;
		}
		if (!form.email.trim()) {
			setError("Email is required.");
			return;
		}

		const newEmp = {
			id: Date.now(),
			name: form.name.trim(),
			username: form.username.trim() || form.name.split(" ")[0].toLowerCase(),
			email: form.email.trim(),
			phone: form.phone.trim(),
			address: { city: form.city.trim() },
			website: form.website.trim(),
			company: { name: form.company.trim() || "Independent" },
		};
		onAdd(newEmp);
		onClose();
	};

	const initials = getInitials(form.name || "New Employee");
	const previewGradient = GRADIENTS[0];

	return (
		<div
			ref={overlayRef}
			onClick={handleOverlay}
			className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4'
		>
			<div className='relative w-full max-w-lg bg-slate-900/90 border border-white/10 rounded-3xl shadow-2xl shadow-purple-900/30 overflow-hidden'>
				{/* gradient header stripe */}
				<div className={`h-1.5 w-full bg-gradient-to-r ${previewGradient}`} />

				{/* header */}
				<div className='flex items-center justify-between px-6 pt-5 pb-4'>
					<div className='flex items-center gap-3'>
						{/* live avatar preview */}
						<div
							className={`w-11 h-11 rounded-xl bg-gradient-to-br ${previewGradient} flex items-center justify-center text-white font-black text-base shadow-lg`}
						>
							{initials}
						</div>
						<div>
							<h2 className='text-white font-bold text-lg leading-tight'>
								Add New Employee
							</h2>
							<p className='text-slate-400 text-xs'>
								Fill in the details below
							</p>
						</div>
					</div>
					<button
						onClick={onClose}
						className='w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all'
					>
						<X className='w-4 h-4' />
					</button>
				</div>

				{/* form body */}
				<div className='px-6 pb-2 grid grid-cols-1 sm:grid-cols-2 gap-3'>
					<div className='sm:col-span-2'>
						<Field
							icon={User}
							label='Full Name *'
							name='name'
							value={form.name}
							onChange={handleChange}
							placeholder='e.g. Jordan Lee'
							accentClass='text-fuchsia-400'
						/>
					</div>
					<Field
						icon={AtSign}
						label='Username'
						name='username'
						value={form.username}
						onChange={handleChange}
						placeholder='e.g. jordanlee'
						accentClass='text-purple-400'
					/>
					<Field
						icon={Mail}
						label='Email *'
						name='email'
						value={form.email}
						onChange={handleChange}
						placeholder='jordan@company.com'
						accentClass='text-cyan-400'
						type='email'
					/>
					<Field
						icon={Phone}
						label='Phone'
						name='phone'
						value={form.phone}
						onChange={handleChange}
						placeholder='+1 555-0100'
						accentClass='text-lime-400'
						type='tel'
					/>
					<Field
						icon={MapPin}
						label='City'
						name='city'
						value={form.city}
						onChange={handleChange}
						placeholder='e.g. New York'
						accentClass='text-pink-400'
					/>
					<Field
						icon={Link}
						label='Website'
						name='website'
						value={form.website}
						onChange={handleChange}
						placeholder='jordanlee.dev'
						accentClass='text-orange-400'
					/>
					<Field
						icon={Building2}
						label='Company'
						name='company'
						value={form.company}
						onChange={handleChange}
						placeholder='Acme Corp'
						accentClass='text-teal-400'
					/>
				</div>

				{/* error */}
				{error && (
					<p className='mx-6 mt-2 text-xs text-rose-400 font-semibold'>
						{error}
					</p>
				)}

				{/* footer actions */}
				<div className='flex items-center justify-end gap-3 px-6 py-5'>
					<button
						onClick={onClose}
						className='px-4 py-2 rounded-xl text-sm font-semibold text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all'
					>
						Cancel
					</button>
					<button
						onClick={handleSubmit}
						className={`flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${previewGradient} hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-purple-700/30`}
					>
						<Plus className='w-4 h-4' />
						Add to Squad
					</button>
				</div>
			</div>
		</div>
	);
}

function deleteEmployee() {}

function EmployeeCard({ emp, index, onDelete }) {
	const gradient = GRADIENTS[index % GRADIENTS.length];
	const tilt = TILTS[index % TILTS.length];

	return (
		<div
			className={`group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 transition-all duration-300 hover:-translate-y-2 hover:${tilt} hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20`}
		>
			{/* sticker badge */}
			<div
				className={`absolute -top-3 -right-3 rotate-6 bg-linear-to-br ${gradient} text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg tracking-wide uppercase`}
			>
				{emp.company?.name?.split(" ")[0] ?? "Team"}
			</div>

			{/* avatar */}
			<div className='flex items-center gap-4 mb-4'>
				<div
					className={`w-16 h-16 shrink-0 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-black text-xl shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}
				>
					{getInitials(emp.name)}
				</div>
				<div className='min-w-0'>
					<h3 className='text-white font-bold text-lg leading-tight truncate'>
						{emp.name}
					</h3>
					<p className='text-fuchsia-300/80 text-sm font-medium truncate'>
						@{emp.username}
					</p>
				</div>
			</div>

			{/* details */}
			<div className='space-y-2 text-sm'>
				<div className='flex items-center gap-2 text-slate-300'>
					<Mail className='w-4 h-4 text-fuchsia-400 shrink-0' />
					<span className='truncate'>{emp.email}</span>
				</div>
				<div className='flex items-center gap-2 text-slate-300'>
					<Phone className='w-4 h-4 text-cyan-400 shrink-0' />
					<span className='truncate'>{emp.phone?.split(" ")[0]}</span>
				</div>
				<div className='flex items-center gap-2 text-slate-300'>
					<MapPin className='w-4 h-4 text-lime-400 shrink-0' />
					<span className='truncate'>{emp.address?.city}</span>
				</div>
			</div>

			{/* footer chip */}
			<a
				href={`https://${emp.website}`}
				target='_blank'
				rel='noreferrer'
				onClick={e => e.preventDefault()}
				className='mt-4 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-xs font-semibold hover:bg-white/10 transition-colors'
			>
				<Globe className='w-3.5 h-3.5' />
				{emp.website}
			</a>

			<button
				onClick={() => onDelete(emp.id)}
				className='mt-2 flex items-center justify-center gap-1.5 w-full py-2 rounded-xl text-xs font-bold transition-all border bg-white/3 border-white/8 text-slate-500 hover:bg-rose-500/10 hover:border-rose-400/30 hover:text-rose-400'
			>
				<Trash2 className='w-3.5 h-3.5' />
				Remove from squad
			</button>
		</div>
	);
}

function SkeletonCard() {
	return (
		<div className='bg-white/5 border border-white/10 rounded-3xl p-5 animate-pulse'>
			<div className='flex items-center gap-4 mb-4'>
				<div className='w-16 h-16 rounded-2xl bg-white/10' />
				<div className='flex-1 space-y-2'>
					<div className='h-4 bg-white/10 rounded w-3/4' />
					<div className='h-3 bg-white/10 rounded w-1/2' />
				</div>
			</div>
			<div className='space-y-2'>
				<div className='h-3 bg-white/10 rounded w-full' />
				<div className='h-3 bg-white/10 rounded w-5/6' />
				<div className='h-3 bg-white/10 rounded w-2/3' />
			</div>
		</div>
	);
}

export default function AllEmployees() {
	const [employees, setEmployees] = useState([]);
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(res => res.json())
			.then(data => {
				setEmployees(data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, []);

	const handleAddEmployee = newEmp => {
		setEmployees(prev => [newEmp, ...prev]);
	};
	const handleDeleteEmployee = id => {
		{
			console.log(setEmployees);
		}
		// setEmployees(prev => console.log(prev));
		setEmployees(prev => prev.filter(emp => emp.id !== id));
	};

	const filtered = employees.filter(
		emp =>
			emp.name.toLowerCase().includes(search.toLowerCase()) ||
			emp.company?.name?.toLowerCase().includes(search.toLowerCase()) ||
			emp.username.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div className='flex flex-col min-h-screen bg-slate-950 bg-linear-to-br from-slate-950 via-purple-950/40 to-slate-950 font-sans antialiased'>
			{/* hero */}
			<div className='px-6 pt-10 pb-6 text-center'>
				<div className='inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-3 py-1 text-xs font-semibold text-fuchsia-300 mb-3'>
					<Sparkles className='w-3.5 h-3.5' />
					the squad directory
				</div>
				<h1 className='text-4xl sm:text-5xl font-black text-white tracking-tight'>
					who's who{" "}
					<span className='bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent'>
						rn
					</span>{" "}
					👀
				</h1>
				<p className='text-slate-400 mt-2 text-sm'>
					your whole crew, one search away
				</p>
			</div>

			{/* search */}
			<div className='px-4 sm:px-6 mb-8 max-w-md mx-auto w-full'>
				<div className='flex justify-end p-1'>
					<button
						onClick={() => setShowModal(true)}
						className='flex items-center gap-1.5 text-xs font-bold text-fuchsia-300 hover:text-fuchsia-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-fuchsia-400/30 px-3 py-1.5 rounded-full transition-all'
					>
						<Plus className='w-3.5 h-3.5' />
						Add New Employee
					</button>
				</div>
				<div className='relative'>
					<Search className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400' />
					<input
						type='text'
						placeholder='Search The Squad...'
						value={search}
						onChange={e => setSearch(e.target.value)}
						className='w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-white placeholder:text-slate-500 text-sm font-medium focus:outline-none focus:border-fuchsia-400/50 focus:bg-white/10 transition-all'
					/>
				</div>
			</div>

			{/* grid */}
			<main className='grow px-4 sm:px-6 pb-12 max-w-6xl mx-auto w-full'>
				{loading ? (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						{Array.from({ length: 6 }).map((_, i) => (
							<SkeletonCard key={i} />
						))}
					</div>
				) : filtered.length === 0 ? (
					<div className='flex flex-col items-center justify-center py-20 text-center'>
						<Users className='w-10 h-10 text-slate-600 mb-3' />
						<p className='text-slate-400 font-medium'>
							no one here... try another name 🕵️
						</p>
					</div>
				) : (
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
						{filtered.map((emp, i) => (
							<EmployeeCard
								key={emp.id}
								emp={emp}
								index={i}
								onDelete={handleDeleteEmployee}
							/>
						))}
					</div>
				)}
			</main>

			{/* modal */}
			{showModal && (
				<AddEmployeeModal
					onClose={() => setShowModal(false)}
					onAdd={handleAddEmployee}
				/>
			)}
		</div>
	);
}
