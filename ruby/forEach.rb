alunos = [{nome: 'Pedro', disciplina: "Python", nota: 8}, {nome: 'Cathia', disciplina: 'C++', nota: 4}]

alunos.each do |aluno|
  puts(aluno[:disciplina])
end