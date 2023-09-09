import SideBarMenu from "./SideBarMenu.astro";

const { sideBarActiveItemID } = Astro.props;
<Fragment>
	<div class="drawer-side z-40">
		<label for="my-drawer" class="drawer-overlay"></label>
		<aside class="px-2 pt-2 h-auto min-h-full w-[19rem] bg-base-200 text-base-content flex flex-col">
			<a
				class="btn btn-ghost normal-case text-xl block sm:hidden"
				href="/"
			>
				Farhanah Izzati 🌱
			</a>

			<SideBarMenu sideBarActiveItemID={sideBarActiveItemID} />

			<div class="px-4 pb-5 pt-1 text-center">
				<p class="text-sm">
					Developed with
					<a
						href="https://astro.build/"
						target="_blank"
						class="font-bold"
					>
						Astro 🚀
					</a>
				</p>
			</div>
		</aside>
	</div>
</Fragment>;
export default function SideBar(_props: Record<string, any>): any {}
