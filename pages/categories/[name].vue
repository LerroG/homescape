<script setup lang="ts">
import properties from '~/data/properties'

const route = useRoute()
const categoryName = route.params.name

const filteredProperties = computed(() =>
	properties.filter(item => item.category === categoryName)
)
</script>

<template>
	<!-- Hero Section -->
	<section
		class="relative h-[40vh] flex items-center justify-center pt-12 bg-gray-200"
	>
		<BaseOverlayBg />

		<div class="text-center z-10">
			<h2 class="text-primary font-bold text-5xl">
				{{ categoryName }}
			</h2>
		</div>
	</section>

	<!-- Listings Section -->
	<section class="py-12">
		<div class="container">
			<div
				v-if="filteredProperties.length"
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
			>
				<PropertyCard
					v-for="property in filteredProperties"
					:key="property.id"
					:property="property"
				/>
			</div>

			<div v-else class="text-center py-12">
				<div class="text-5xl font-black mb-2">Oops</div>

				<p class="text-gray-700 text-xl mb-8">
					No properties found for this category.
				</p>

				<NuxtLink to="/">
					<BaseBtn>Return to homepage</BaseBtn>
				</NuxtLink>
			</div>
		</div>
	</section>
</template>
