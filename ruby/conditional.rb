conceitos = [['Pedro', 6], ['Andre', 8], ['Fernando', 4]]

for item in conceitos do
	nota = item[1]
	case nota
		when 0..5
			puts(item[0] + ' está reprovado')
		when 5..9
			puts(item[0] + ' está aprovado')
		else
			puts(item[0] + ' foi perfeito(a)')
	end
end