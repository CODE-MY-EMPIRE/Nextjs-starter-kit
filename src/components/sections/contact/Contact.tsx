import Container from '@/components/ui/Container';
import SectionHeader from '@/components/ui/SectionHeader';
import React from 'react'

type ContactFormData = {
  name: string;
  email: string;
  message: string;
}

type Props = {
  onSubmit: (data: ContactFormData) => void;
}

const Contact = ({ onSubmit }: Props) => {
  return (
		<section className="py-20 bg-background text-foreground">
			<Container>
				<SectionHeader
					heading="Contact Us"
					subheading="Get in touch with us for any questions or feedback."
				/>

				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
					<div className="space-y-4">
						<h3 className="text-lg font-bold">Contact Us</h3>
					</div>
				</div>
			</Container>
		</section>
	);
}

export default Contact