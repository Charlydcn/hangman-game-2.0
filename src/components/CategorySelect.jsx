const CategorySelect = ({ onCategoryChange }) => {
    const categories = [
        "L'École - La Classe - L'Instruction",
        "Paysages - Climat - Formes",
        "Qualités et Défauts",
        "Calcul et Mesures",
        "Les Aliments - Les Boissons - Les Repas",
        "Le Corps Humain",
        "Les Sens - La Volonté - L'Intelligence",
        "L'Intérieur et le Mobilier",
        "L'Industrie et le Travail",
        "Les Arts",
        "L'Agriculture",
        "Verger - Bois - Chasse - Pêche",
        "Gestes et Mouvements",
        "Époque - Temps - Saisons",
        "Vêtements - Toilette - Parures",
        "Sports et Jeux",
        "La Maison - Le Bâtiment",
        "Les Voyages",
        "Les Animaux",
        "Ville - Village - Univers - Dimensions",
        "Eaux - Minéraux - Végétaux",
        "Le Commerce",
        "La Communication",
        "Joies et Peines",
        "Gouvernement et Justice",
        "L'Armée",
        "Vie Humaine - Maladies - Hygiène"
    ];

    const handleChange = (e) => {
        const selectedIndex = e.target.selectedIndex;
        const selectedOption = e.target.options[selectedIndex];
        const categoryId = selectedOption.value;
        const categoryName = selectedOption.getAttribute('data-category-name') || selectedOption.text;
        onCategoryChange(categoryId, categoryName);
    }

    return (
        <select onChange={handleChange}>
            <option value="0">Toutes les catégories</option>
            {categories.map((category, index) => (
                <option key={index} value={index + 1} data-category-name={category}>{category}</option>
            ))}
        </select>
    );
}

export default CategorySelect;
